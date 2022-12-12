
import { PasswordChecker } from './index'


describe('password validator', () => {
  it ('returns an invalid length error when strings like "mom" are less than 5 characters', () => {
    // arrange

    // act
    let response = PasswordChecker.checkPassword('mom')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual('InvalidLengthError');
  })
})

