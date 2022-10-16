import { render, screen } from '@testing-library/react'
import HomePageGridSmallCards from '../HomePageGridSmallCards'

describe('HomePageGridSmallCards', () => {
    const props = {
        data: [{
            name: "pikachu",
            url:"pokapi/pikachu"
        }]
    }
    const setup = (initialProps = props) => render(<HomePageGridSmallCards {...initialProps} />)
    
    it('Renders correctly', () => {
        const { container } = setup();

        expect(container).toMatchSnapshot();
    })

    it('Guards when gets 0 elements', () => {
        const { container } = setup({data: []});

        const text = "There' s not pokemons with that name, let' s catch them ;)"

        expect(screen.getByText(text)).toBeInTheDocument()
        expect(container).toMatchSnapshot();
    })
})