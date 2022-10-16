import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SmallCard from '../SmallCard'

describe('SmallCard', () => {
    const props = {
        text: 'TextSmallCard'
    }
    const setup = (initialProps = props) => render(<SmallCard {...initialProps}/>)
    it('Renders correctly', () => {
        const { container } = setup();
        expect(screen.getByText('TextSmallCard')).toBeInTheDocument()
        expect(container).toMatchSnapshot();
    })

    it('Renders correctly',async  () => {
        const handleClick = jest.fn()
        setup({ text: 'New text', onClick: handleClick });

        await userEvent.click(screen.getByText('New text'))

        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})