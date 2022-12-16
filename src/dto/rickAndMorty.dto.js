class CharactersDto {
  constructor(characters) {
    this.characters = characters.results.map((character) => {
      return {
        id: character.id,
        image: character.image,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender
      };
    });
  }
}

export default CharactersDto;
