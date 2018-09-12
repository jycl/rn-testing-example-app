import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Text, TouchableHighlight} from 'react-native';
import Clickable from '../Clickable';

describe("<Clickable>", () => {
    it("updates number when clicked", () => {
        const render = renderer.create(<Clickable/>);
        const button = render.root.findByType(TouchableHighlight);
        const text = render.root.findByType(Text);
        expect(text.props.children).toBe(1);
        expect(render.root.instance.state.number).toBe(1);

        //you are responsible for creating a suitable Event object for what handler needs
        //e.g. for input fields .onChange({target: {value:'blue'}})
        //then check mock function passed to component e.g. expect(colourChangerMock).toHaveBeenCalledWith('blue');
        button.props.onPress();
        expect(text.props.children).toBe(2);
    });
});
