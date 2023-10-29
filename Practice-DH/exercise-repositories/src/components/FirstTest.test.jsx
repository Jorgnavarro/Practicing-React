import {render, screen} from '@testing-library/react';
import { expect } from 'chai';
import { RepositoryDetail } from './RepositoryDetail';

describe('RepositoryDetail', ()=>{

        test('CheckComponent', ()=>{
                const repoDetail = {
                        name: "testRepo",
                        description: "testing repository",
                        language: "javascript",
                        fork: true,
                        html_url: 'http://...//',
                        created_at: "2022-10-14T22:29:53Z"
                }
                const componente = render(<RepositoryDetail detailRepository={repoDetail}/>)
                expect(componente.getByText("javascript")).toBeDefined()
        });
});
