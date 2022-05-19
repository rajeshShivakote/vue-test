import SignUpPage from './SignUpPage.vue';
import { render, screen }  from '@testing-library/vue';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import axios from 'axios';
describe('Sign Up Page', () =>{
    describe('Layout', () =>{
        it('has signup header', () =>{
            render(SignUpPage);
            const header = screen.queryByRole('heading', { name: 'Sign Up'});
            expect(header).toBeInTheDocument();
        });
        it('has username input',() =>{
            const {getByLabelText} = render(SignUpPage);
            const input = getByLabelText(/username/i);
            expect(input).toBeInTheDocument();
        });
        it('has email input',() =>{
           // console.log(render(SignUpPage));
           const { getByLabelText } = render(SignUpPage);
           const input = getByLabelText(/email/i);
           expect(input).toBeInTheDocument();
        });

         it('has password input',() =>{
            // console.log(render(SignUpPage));
            const { queryByLabelText } = render(SignUpPage);
            const input = queryByLabelText("Password");
            expect(input).toBeInTheDocument();
         });

         it('has password type for input',() =>{
            // console.log(render(SignUpPage));
            const { queryByLabelText } = render(SignUpPage);
            const input = queryByLabelText("Password");
            expect(input.type).toBe("password");
         });

         it('has password repeat input',() =>{
            // console.log(render(SignUpPage));
            const { queryByLabelText } = render(SignUpPage);
            const input = queryByLabelText("Password Repeat");
            expect(input).toBeInTheDocument();
         });

         it('has password type for input',() =>{
            // console.log(render(SignUpPage));
            const { getByLabelText } = render(SignUpPage);
            const input = getByLabelText("Password Repeat");
            expect(input.type).toBe("password");
         });

         
         it('has Sign up button',() =>{
            // console.log(render(SignUpPage));
            const { queryByRole } = render(SignUpPage);
            const button = queryByRole("button", { name: "Sign Up"});
            expect(button).toBeInTheDocument();
         });

         it("has Sign up button disabled", () =>{
             const { queryByRole } = render(SignUpPage);
             const button = queryByRole("button", { name: "Sign Up"});
             expect(button).toBeDisabled();
         })
 
         describe("Interactions", () =>{
             it("Enables the button when the password and password repeat fields has same value", async ()=> {
                 const  { queryByLabelText, queryByRole } =render(SignUpPage);
                 const passwordInput = queryByLabelText('Password');
                 const passwordRepeatInput = queryByLabelText('Password Repeat');
                await userEvent.type(passwordInput, "P4ssword");
                await userEvent.type(passwordRepeatInput, "P4ssword");
                const button = queryByRole("button", { name: "Sign Up"});
                expect(button).toBeEnabled()

             })

             it("sends username, email and password to backend after clicking the button", async () =>{
                const  { queryByLabelText, queryByRole } =render(SignUpPage);
                const usernameInput = queryByLabelText("Username");
                const emailInput = queryByLabelText("Email");
                const passwordInput = queryByLabelText("Password");
                const passwordRepeatInput = queryByLabelText('Password Repeat');
                await userEvent.type(usernameInput, "user1");
                await userEvent.type(emailInput, "user1@mail.com");
                await userEvent.type(passwordInput, "P4ssword");
                await userEvent.type(passwordRepeatInput, "p4ssword");
                const button = queryByRole("button", { name: "Sign Up"});
                const mockFn = jest.fn();
                axios.post = mockFn;
                await userEvent.click(button);
                const firstCall = mockFn.mock.calls[0];
                console.log(firstCall);
                const body = firstCall[1];
                expect(body).toEqual({
                    username: 'user1',
                    email: 'user1@mail.com',
                    password: 'P4ssword'
                })

                //expect(button).toBeEnabled();
             }) 
         })

         
        //  it('has password repeat type for input',() =>{
        //     // console.log(render(SignUpPage));
        //     const { getByLabelText } = render(SignUpPage);
        //     const input = getByLabelText(/Password Repeat/i);
        //     expect(input.type).toBe("password");
        //  });

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
