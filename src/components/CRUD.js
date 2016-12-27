import React from 'react';
import ReactDOM from 'react-dom';

var Comment = React.createClass({
    getInitialState: function () {
        return {editing: false}
    },
    edit: function () {
        this.setState({editing: true});
    },
    remove: function () {
        this.props.deleteFromBoard(this.props.index);
    },
    save: function () {
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
        this.setState({editing: false});
    },
    renderNormal: function () {
        return (
            <div className="conversationContainer">
                <div className="conversation">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    },

    renderForm: function () {
        return (
            <div className="conversationContainer">
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="button-success">Save</button>
            </div>
        );
    },

    render: function () {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
});

var CheckBox = React.createClass({

    getInitialState: function () {
        return {checked: true}
    },

    handleChecked: function () {
        this.setState({checked: !this.state.checked})
    },

    render: function () {
        var msg;
        if (this.state.checked) {
            msg = 'checked'
        } else {
            msg = 'unchecked'
        }
        return (
            <div>
                <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked}/>
                <h3>checkbox is {msg}</h3>
            </div>
        );
    }
});

var Board = React.createClass({

    getInitialState(){
        return {
            comments: [
                'compiler',
                'scope manager',
                // 'execution phase'
            ]
        }
    },

    addComment: function(text){
        var arr = this.state.comments;
        arr.push(text);
        this.setState({comments: arr})
    },

    removeComment: function(i){
        var arr = this.state.comments;
        // this will give you a new array stored in arr with the comment removed
        arr.splice(i, 1);
        // set the new array to the updated array
        this.setState({comments: arr})
    },

    updateComment: function(newText, i){
        var arr = this.state.comments;
        arr[i] = newText;
        // set the new array to the updated array
        this.setState({comments: arr})
    },

    eachComment: function (text, i) {
        return (
            // key is for React, index is for the developer
            <Comment
                key={i}
                index={i}
                updateCommentText={this.updateComment}
                deleteFromBoard={this.removeComment}>
                {text}
            </Comment>
        );
    },

    render: function () {
        return (
            <div>
                <button onClick={this.addComment.bind(null, 'Press edit to change default text')}>Add New</button>
                <div className="board">
                    {this.state.comments.map(this.eachComment)}
                    <CheckBox />
                </div>
            </div>
        )
    }
});


ReactDOM.render(
    <Board />
    , document.getElementById('root'));
