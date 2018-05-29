/*
  search.js

  Child route of <Base> located at `/`
*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CarCard from '../../views/CarCard';
import * as actions from '../../actions/index';

import { bindActionCreators } from 'redux';
import './index.css';
import Select from "../../views/Select";
import QButton from '../../views/QButton';

const redirectRoute = `/make/model`;

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMake: "",
            applicableModels: [],
            selectedModel: "",
            isModelDisabled: true,
            isButtonDisabled: true
        };
    }



    handleChange = (event, type) => {
        if (type == 'Make') {
            const selectedMake = event.target.value;
            const applicableModels = this.props.models.filter(
                e => e.makeId == selectedMake
            );
            const isModelDisabled = false;
            const isButtonDisabled = true;
            this.setState({
                selectedMake,
                applicableModels,
                isModelDisabled,
                isButtonDisabled
            });
        }
        else if (type == 'Model') {
            const selectedModel = event.target.value;
            const isButtonDisabled = false;
            this.setState({
                selectedModel,
                isButtonDisabled
            });
        }
    };


    render() {
        // Ok to use `<Link>` here now, since the parent component (`<Base>`)
        // contains all router logic
        const { defaultCar, readyToRender, makes } = this.props;
        const { applicableModels, selectedMake, isModelDisabled, selectedModel, isButtonDisabled } = this.state;

        if (makes && makes.length > 0) {
            const selectedMakeValue = selectedMake || "";
            return (
                <div className="search-view">
                    <div className="search-view-content">
                        <div className="search-content-details">
                            <Select id="Make" title="Make" valueArray={makes} isDisabled={false} selectedValue={selectedMakeValue} handleChange={this.handleChange} />
                            <Select id="Model" title="Model" valueArray={applicableModels} isDisabled={isModelDisabled} selectedValue={selectedModel} handleChange={this.handleChange} />
                            <QButton onClick={() => this.props.history.push(`${redirectRoute}/${selectedModel}`)} title="Display Details" isDisabled={isButtonDisabled}></QButton>
                        </div>
                    </div>
                </div>
            );
        }
        else return null;
    }
}

const mapStateToProps = (state, route) => {
    // extract the relevent parts of the state you need for this view
    const { modelsState, makesState, carOfWeekState } = state;
    const { fetchingModels, models } = modelsState;
    const { fetchingMakes, makes } = makesState;
    let defaultCar = {};

    return {
        models,
        makes
    };


};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));



