<?php
class TCG_Editor {
	private $db;
	public function __construct()
	{
		$json = file_get_contents("../config.json");
		$config = json_decode($json);
		$this->db = new mysqli (
			$config->host, 
			$config->user, 
			$config->password, 
			$config->database
		);
		if ($this->db->connect_errno) {
    			die(	"Failed to connect to MySQL: " 
    				.$this->db->connect_error );
		}
	}
	public function dump_db()
	{
		//$foo = $this->db->query('SHOW CREATE VIEW floofs;');
		$foo = $this->db->query('SELECT * FROM floofs WHERE 1;');
		//echo $foo->fetch_assoc()['Create View'];
		//var_dump($foo->fetch_assoc()['Create View']);
	}

	public function edit_card($json)
	{
		$md = json_decode($json);
		$filename = 'test.json';
		file_put_contents($filename, $json);
	}

/**
 * get_card(), retrieves JSON formatted data for a single card.
 * 
 * @param  int $id
 * @return Serialized JSON
 */
	public function get_card($id, $fields)
	{
		$sql = "SELECT card_id, card_no, name, flavour, 
			(
				SELECT name 
				FROM sets 
				WHERE sets.set_id = cards.set_no
			) AS `set`,
			(
				SELECT name 
				FROM rarity 
				WHERE rarity.rarity_id = cards.rarity
			) AS rarity,
			(
				SELECT name 
				FROM family 
				WHERE family.family_id = (
					SELECT family_id
					FROM card_family
					WHERE card_family.card_id = cards.card_id
				)
			) AS family,
			(
				SELECT name 
				FROM species 
				WHERE species.species_id = (
					SELECT species_id
					FROM card_species
					WHERE card_species.card_id = cards.card_id
				)
			) AS species,
			(
				SELECT offence defence
				FROM creatures
				WHERE creatures.creature_id = cards.card_id
			) AS offence,
			(
				SELECT defence
				FROM creatures
				WHERE creatures.creature_id = cards.card_id
			) AS defence
		
			FROM cards 
			WHERE card_id = $id
		";
		$card = $this->db->query($sql)->fetch_assoc();
		$sql = "SELECT cost 
			FROM card_costs
			WHERE card_id = $id
		";
		$r = $this->db->query($sql); $cost = array();
		while($l = $r->fetch_object()) {
			$cost = array_merge(
				json_decode($l->cost, true), $cost);
		}
		$card['cost'] = $cost;
		$sql = "SELECT cost,
			(
				SELECT name
				FROM abilities
				WHERE abilities.ability_id = card_abilities.ability_id
			) AS name 
			FROM card_abilities
			WHERE card_id = $id
		";
		$card['abilities'] = $this->db->query($sql)->fetch_all(MYSQLI_ASSOC);

		//$_['card'] = $card;
		return json_encode($card);
	}

	public function get_cards()
	{

	}
	public function get_abilities()
	{

	}
	public function get_something()
	{

	}
}
/*
$foo = "CREATE VIEW floofs AS 
	SELECT 
		cards.card_no AS card_no,
		cards.name AS name,
		(SELECT rarity.name 
			FROM rarity 
			WHERE (cards.card_id = cards.card_id)) AS rarity,
		(SELECT card_costs.cost 
			FROM card_costs 
			WHERE (card_costs.card_id = cards.card_id)) AS cost,
		(SELECT family.name 
			FROM family 
			WHERE (family.family_id = cards.family_id)) AS family,
		(SELECT species.name 
			FROM species 
			WHERE (cards.card_id = cards.card_id)) AS species,
		cards.flavour AS flavour 
		
		FROM cards 
		WHERE (cards.type = 1)";
*/
