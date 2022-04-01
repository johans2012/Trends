package Service;

import java.util.List;

import Model.Player;

public interface PlayerService {
	public boolean savePlayer(Player player);
	public List<Player> getPlayers();
	public boolean deletePlayer(Player player);
	public List<Player> getPlayerByID(Player player);
	public boolean updatePlayer(Player player);
}
