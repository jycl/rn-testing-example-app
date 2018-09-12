import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Testable from "../Testable";
import {Provider} from "../Context";
import {Text} from 'react-native';

describe("<Testable>", () => {
    it("renders the correct text", () => {
        const value = 'greetings';
        const pair = 'salutations';

        const render = renderer.create( //create() returns renderer instance
        <Provider value={value}>
            <Testable pair={pair}/>
        </Provider>
        );

        //const instance = render.root; //root property is an element instance for root component (Provider)
        //Element instances expose properties for testing: type, props, and parent/children instances
        //props.children != children (typically use type or props)
        //Methods to find descendants, instance.findByType, .findByProps, findAll[ByType|ByProps]
        const textInst = render.root.findByType(Text);
        //Note: props.children returned array of ["value", " & ", "pair"]
        //expect(instance.findByType(Text).props.children).toBe(`${value} & ${pair}`) will fail
        expect(textInst.props.children.join("")).toBe(`${value} & ${pair}`);
        
        const value2 = "farewell"; 

        //use Renderer.update in order to update the props on the components
        render.update(
            <Provider value={value2}>
                <Testable pair={pair}/>
            </Provider>
        );
        expect(textInst.props.children.join("")).toBe(`${value2} & ${pair}`);
    });
});