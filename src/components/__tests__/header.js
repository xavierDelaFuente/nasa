import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import Header from "../header"

describe("Header", () => {
  it("works with react-test-rendere: renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
  
  test("works with @testing-library/react: Displays the correct title", () => {
    const title = 'Default Starter'
    const { getByTestId, debug } = render(<Header siteTitle={title} />)

    expect(getByTestId("site-title")).toHaveTextContent(title)
  })
})