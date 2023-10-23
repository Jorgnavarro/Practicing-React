import {render, screen} from '@testing-library/react';
import App from '../App';
import { List } from './List';
import { RepositoryDetail } from './RepositoryDetail';

describe('checkApp', ()=>{
        test('CheckComponent', ()=>{
                render(<App/>)
                expect(screen.getByText("Repository Details📥")).toBeDefined()
        });
});
