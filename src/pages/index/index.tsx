import { Component } from "react";
import { View, Picker } from "@tarojs/components";
import "./index.css";

export default class Index extends Component<{}, { date: string }> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
  }

  private updateDate(value) {
    this.setState({ date: value });
  }

  render() {
    return (
      <View className="index">
        <Picker
          onChange={({ detail }) => {
            this.updateDate(detail.value);
          }}
          mode="date"
          fields="month"
          value={this.state.date}
        >
          <View>日期为:</View>
          <View>{this.state.date}</View>
        </Picker>
      </View>
    );
  }
}
