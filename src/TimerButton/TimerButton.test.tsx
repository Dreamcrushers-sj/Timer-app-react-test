import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import TimerButton from "./TimerButton"

describe("TimerButton", () => {
  let container: ShallowWrapper

  beforeEach(() => {
    container = shallow(
      <TimerButton
        buttonAction={jest.fn()}
        buttonValue={""}
      />
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})

