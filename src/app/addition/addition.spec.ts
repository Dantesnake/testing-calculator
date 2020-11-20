import { addition } from "./addition";

describe('addition uni tests', () => {
    
    it('Should add 2 + 2 = 4' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = addition(2,2);

        //Assert
        expect(result).toBe(4);

    })

    it('Should add 0 + -2 = -2' ,() => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = addition(0,-2);

        //Assert
        expect(result).toBe(-2);

    })

    it('Should add 3.0 + 0.1416 = 3.1416' ,() => {

        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = addition(3.0,0.1416);

        //Assert
        expect(result).toBe(3.1416);

    })
    
    it('Should add 2.0 + 0.7 = 2.7' ,() => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = addition(2,0.7);

        //Assert
        expect(result).toBe(2.7);

    })

    it('Should add 0.0 + 0.0 = 0.0' ,() => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = addition(0,0);

        //Assert
        expect(result).toBe(0);

    })
    
})