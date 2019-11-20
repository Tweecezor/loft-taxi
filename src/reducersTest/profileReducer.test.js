import {sendProfileDataRequest,getProfileDataRequest,getCardDataRequest,changeCardNumber,changeCardData,changeCardOwner,changeCardCVC} from '../Actions/actions'
import {ProfileReducer} from '../reducers';

describe('profile Reducer',()=>{
    var state  = {
        cardNumber:'',
        cardData:'',
        cardOwner:'',
        cardCVC:'',
    }
    it('get Profile Data',()=>{
       
        let action = getProfileDataRequest({cardNumber:1,expiryDate:2,cardName:3,cvc:4});
    
        let newState = ProfileReducer(state,action);
    
        expect(newState).toStrictEqual({
            cardNumber:1,
            cardData:2,
            cardOwner:3,
            cardCVC:4,
        })
    })
    it('set card number',()=>{
        let cardNumber = 123;
        let action = changeCardNumber({cardNumber});
    
        let newState = ProfileReducer(state,action);
    
        expect(newState).toStrictEqual({
            cardNumber:123,
            cardData:'',
            cardOwner:'',
            cardCVC:'',
        })
    })
    it('set card data expired',()=>{
        let cardData = 123;
        let action = changeCardData({cardData});
    
        let newState = ProfileReducer(state,action);
    
        expect(newState).toStrictEqual({
            cardNumber:'',
            cardData:123,
            cardOwner:'',
            cardCVC:'',
        })
    })
    it('set card owner ',()=>{
        let cardOwner = 'owner';
        let action = changeCardOwner({cardOwner});
    
        let newState = ProfileReducer(state,action);
    
        expect(newState).toStrictEqual({
            cardNumber:'',
            cardData:'',
            cardOwner:'owner',
            cardCVC:'',
        })
    })
    it('set card cvc ',()=>{
        let cardCVC = 123;
        let action = changeCardCVC({cardCVC});
    
        let newState = ProfileReducer(state,action);
    
        expect(newState).toStrictEqual({
            cardNumber:'',
            cardData:'',
            cardOwner:'',
            cardCVC:123,
        })
    })
})


