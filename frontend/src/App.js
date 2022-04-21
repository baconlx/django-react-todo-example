import React, { Component } from "react";

const todoItems = [
  {
    id: 1,
    title: "Task A",
    description: "Task A",
    completed: true,
  },
  {
    id: 2,
    title: "Task B",
    description: "Task B",
    completed: false,
  },
  {
    id: 3,
    title: "Task C",
    description: "Task C",
    completed: true,
  },
  {
    id: 4,
    title: "Task D",
    description: "Task D",
    completed: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li key={item.id}>
        <span
          className={`${this.state.viewCompleted ? "completed-todo" : ""}`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button>
            Edit
          </button>
          <button>
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <>
        <h1>TODO APPLICATION</h1>

        <div className="add-task">
          <button>add task</button>
        </div>

        <div className="todos">
          {this.renderTabList()}
          <div className="todo-list">
            {this.renderItems()}
          </div>
        </div>
      </>
    );
  }
}

export default App;