import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from "../App";
import {FlatList, Text, TouchableHighlight, Image} from 'react-native';

//"react-test-renderer" library tutorials / examples (without Enzyme):
/**
 * https://medium.com/@pshrmn/testing-react-native-components-in-node-with-react-test-renderer-cb2985402dce 
 * 1. Rendering elements
 * 2. Testing props
 * 3. Finding nested elements
 * 4. Updating props
 * 5. Calling event handlers
 */

/**
 * Testing React 16.3 without Enzyme
 * https://itnext.io/testing-react-16-3-components-with-react-test-renderer-without-enzyme-d9c65d689e88 
 * TestRenderer.create() returns renderer (wrapper around components)
 *     - .toJSON() returns a JavaScript object representing HTML/RN output
 *     - .root reference to root component of component tree
 * 
 * instance (.root) methods
 *     - .find()/findAll() - takes predicate function (e.g. (el) => el.type == 'span');
 *     - .findByType()/findAllByType() - take component constructor
 *     - .findByProps/findAllByProps() - search for components by props (e.g. {name: "Joe"})
 */

 /**
  * ReactJS Test Renderer Documentation
  * https://reactjs.org/docs/test-renderer.html 
  */

//note about jest --updateSnapshot, since it is added to scripts you can use npm test -- --updateSnapshot (https://stackoverflow.com/questions/50138532/)
//see https://www.reactnative.guide/7-testing/7.1-jest-setup.html for jest setup shortcuts / scripts

describe("<App>", () => {
    it("Renders correctly with expected components", () => {
        const render = renderer.create(<App/>);
        expect(render.toJSON()).toMatchSnapshot();

        //find(predicate function with custom checking)
        //without "All", matching more than one will throw an exception
        const button = render.root.find((comp) => {
            return comp.type === TouchableHighlight
        });
        expect(button.type).toBe(TouchableHighlight);
        expect(button.props.children).toBeTruthy();

        //findAllByType get an array of all components
        const texts = render.root.findAllByType(Text);
        expect(texts).toHaveLength(8);
        texts.forEach((text) => {
            expect(text.props.children).toBeTruthy();
        });

        //use findAll to get an absence of component
        const images = render.root.findAllByType(Image);
        expect(images).toHaveLength(0);

        //finding all sub-components in a component
        const list = render.root.findByType(FlatList);
        const listItems = list.findAllByType(Text);
        expect(listItems).toHaveLength(4);

        //by props
        const component = render.root.findByProps({pair: "blue"});
        expect(component).toBeTruthy();
    });
});