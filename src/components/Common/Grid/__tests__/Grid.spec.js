import { render, screen } from '@testing-library/react'
import Grid from '../Grid'

describe('Grid', () => {
    const props = {
        grid: '1fr 1fr 1fr',
        gap: '25px'
    }
    const setup = (initialProps = props) => render(<Grid {...initialProps} />)
    it('Renders correctly', () => {
        const { container } = setup();

        expect(container).toMatchSnapshot();
    })
})