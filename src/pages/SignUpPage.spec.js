import SignUpPage from './SignUpPage.vue';
import {render, screen }  from '@testing-library/vue';
import "@testing-library/jest-dom";

describe('Sign Up Page', () =>{
    describe('Layout', () =>{
        it('has signup header', () =>{
            render(SignUpPage);
            const header = screen.queryByRole('heading', { name: 'Sign Up'});
            expect(header).toBeInTheDocument();
        });
        it('has username input',() =>{
            render(SignUpPage);
            const input = screen.queryByLabelText('username');
            expect(input).toBeInTheDocument();
        });
        it('has email input',() =>{
           // console.log(render(SignUpPage));
            render(SignUpPage);
            const input = screen.queryByLabelText('email');
            expect(input).toBeInTheDocument();
        });

        // it('has username input',() =>{
        //     const { container } = render(SignUpPage);
        //     const input = container.querySelector('input');
        //     expect(input).toBeInTheDocument();
        // });

        // it('has email input', ()=> {
        //     const { container } =render(SignUpPage);
        //     const inputcount = container.querySelectorAll('input').length;
        //     expect(inputcount).toBe(2)
        // })

        /*it('has username input',() =>{
            render(SignUpPage);
            const input = screen.queryByPlaceholderText('username');
            expect(input).toBeInTheDocument();
        });
        it('has email input',() =>{
            render(SignUpPage);
            const input = screen.queryByPlaceholderText('email');
            expect(input).toBeInTheDocument();
        });*/

      


    })
})
