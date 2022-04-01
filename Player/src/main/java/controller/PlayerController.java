package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Group;
import Model.Player;
import Service.GroupService;
import Service.PlayerService;

@RestController
@CrossOrigin(origins = "https://localhost:4200")
@RequestMapping(value = "/player")
public class PlayerController {

	@Autowired
	private PlayerService playerService;
	@Autowired
	private GroupService groupService;

	@PostMapping("save-player")
	public boolean saveStudent(@RequestBody Player player) {
		return playerService.savePlayer(player);
	}

	@GetMapping("players-list")
	public List<Player> allPlayers() {
		return playerService.getPlayers();
	}
	
	@GetMapping("group-list")
	public List<Group> allGroups(){
		return groupService.getGroups();
	}
		
}
