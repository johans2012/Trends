package DAO;

import java.util.List;

import Model.Player;

public interface PlayerDAO {
	
	public boolean savePlayer(Player Player);
    public List<Player> getPlayers();
    public boolean deletePlayer(Player Player);
    public List<Player> getPlayerByID(Player Player);
    public boolean updatePlayer(Player Player);
}
