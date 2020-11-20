import { sqrt } from "./sqrt";

describe('sqrt uni tests', () => {
    
    it('Should compute sqrt √25 = 5' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = sqrt(25);

        //Assert
        expect(result).toBe(5);

    })

    it('Should compute sqrt √16 = 4' ,() => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = sqrt(16);

        //Assert
        expect(result).toBe(4);

    })

    it('Should compute sqrt √9 = 3' ,() => {

        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = sqrt(9);

        //Assert
        expect(result).toBe(3);

    })
    
    it('Should compute sqrt √4 = 2' ,() => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = sqrt(4);

        //Assert
        expect(result).toBe(2);

    })
    
})