import { test } from 'vitest'
import Hello from './Hello'
import {render} from "@testing-library/react"

test('should render Hello name=Fred', () => {
    render(<Hello name="Fred"/>)
})

// test('should Hello name=Fred render <h2>Bonjour Fred</h2>', () => {
//     render(<Hello name="Fred"/>)
// })
