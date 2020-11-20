import { sqr } from "./sqr";

describe('sqr uni tests', () => {
    
    it('Should compute 2 ^ 2 = 4' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = sqr(2);

        //Assert
        expect(result).toBe(4);

    })

    it('Should compute 3 ^ 2 = 9' ,() => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = sqr(3);

        //Assert
        expect(result).toBe(9);

    })

    it('Should compute 4 ^ 2 = 16' ,() => {

        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = sqr(4);

        //Assert
        expect(result).toBe(16);

    })
    
    it('Should compute 5 ^ 2 = 25' ,() => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = 0;

        //Act
        result = sqr(5);

        //Assert
        expect(result).toBe(25);

    })

    
})