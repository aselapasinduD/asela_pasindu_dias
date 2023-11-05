import { render, screen, cleanup } from '@testing-library/react';
import App from '../../App';

const sectionId = ['header', 'navigationBar', 'aboutMe', 'skills', 'education', 'bigProject', 'footer'];

test('is Rendering Each Sections ? ', () => {
    render(<App />);
    sectionId.forEach((id) => {
        let getElementId = screen.getByTestId(id);
        expect(getElementId).toBeInTheDocument();
    });
});