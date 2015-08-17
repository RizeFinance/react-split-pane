import React from 'react/addons';
const { TestUtils } = React.addons;
import SplitPane from '../lib/SplitPane';
import Resizer from '../lib/Resizer';
import Asserter from './assertions/Asserter';



describe('Vertical SplitPane', function () {


    describe('Defaults', function () {

        const splitPane = (
            <SplitPane split="vertical">
                <div>one</div>
                <div>two</div>
            </SplitPane>
        );


        it('should render the SplitPane', function () {
            new Asserter(splitPane).assertPaneContents(['one', 'two']);
        });


        it('should have vertical orientation', function () {
            new Asserter(splitPane).assertOrientation('vertical');
        });


        it('should contain a Resizer', function () {
            new Asserter(splitPane).assertContainsResizer();
        });
    });



    describe('With defaultSize property', function () {

        const splitPane = (
            <SplitPane split="vertical" defaultSize="99" >
                <div>one</div>
                <div>two</div>
            </SplitPane>
        );


        it('should have correct width for the left Pane', function () {
            new Asserter(splitPane).assertFirstPaneWidth('99px');
        });
    });

});
