package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Model.Player;

@Repository
public class PlayerDAOImpl implements PlayerDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public boolean savePlayer(Player player) {
		boolean status = false;

		try {
			sessionFactory.getCurrentSession().save(player);
			status = true;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Player> getPlayers() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Player> query = currentSession.createQuery("from player", Player.class);
		return query.getResultList();
	}

	@Override
	public boolean deletePlayer(Player player) {
		boolean status = false;

		try {
			sessionFactory.getCurrentSession().delete(player);
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Player> getPlayerByID(Player player) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Player> query = currentSession.createQuery("from player where id=:id", Player.class);
		query.setParameter("id", player.getId());
		return query.getResultList();
	}

	@Override
	public boolean updatePlayer(Player player) {
		boolean status = false;
		try {
			sessionFactory.getCurrentSession().update(player);
			status = true;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return status;
	}

}
