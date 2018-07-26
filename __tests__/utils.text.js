const utils = require('../utils')

// describe('countWords', () => {
//   test('should', () => {
//     const result = utils.countWords({})
//     expect(result).toMatchSnapshot()
//   });

//   test('should', () => {
//     expect(() => {
//       utils.countWords()
//     }).not.toThrow();
//   });
// });

//llamadas a apis
describe('cafee', () => {
   test('should', async () => {
      const result = await utils.getCoffee()
      //jest.runAllTimers testea sin tener en cuenta los timers
      expect(result).toBe("emoji");
   });
});

// para testear ids, funciones con resuktado diferente

const getID = () => {
  return {
    id: expect.any (String),
    create_at: expect.any(Date)
    //anexar regex 
  }
}

// ver si una funcion si triggeo

jest.spyOn(utils, "getID")

describe('Name of the group', () =>{
    test('should', () => {
      const result = utils.getID()
      expect(utils.getID).toBeCalled()
    });

    );
});


o jest.fn()



