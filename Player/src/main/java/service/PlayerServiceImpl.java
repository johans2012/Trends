package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import DAO.PlayerDAO;
import Model.Player;


@Service
@Transactional
public class PlayerServiceImpl implements PlayerService{
	
	@Autowired
	private PlayerDAO playerDao;
	
	@Override
	public boolean savePlayer(Player player) {		
		return playerDao.savePlayer(player);
	}

	@Override
	public List<Player> getPlayers() {		
		return playerDao.getPlayers();
	}

	@Override
	public boolean deletePlayer(Player player) {		
		return playerDao.deletePlayer(player);
	}

	@Override
	public List<Player> getPlayerByID(Player player) {		
		return playerDao.getPlayerByID(player);
	}

	@Override
	public boolean updatePlayer(Player player) {		
		return playerDao.updatePlayer(player);
	}

}
