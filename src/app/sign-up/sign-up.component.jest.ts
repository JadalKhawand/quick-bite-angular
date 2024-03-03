import { render, screen } from '@testing-library/angular';
import { SignUpComponent } from './sign-up.component';
describe('SignUpComponent', () => {
  it('has Sign Up header', async () => {
    await render(SignUpComponent);
    const header = screen.getByRole('heading', { name: 'Sign Up' });
    expect(header).toBeTruthy();
  });
  it('has username input', async () => {
    await render(SignUpComponent);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('has password input', async () => {
    await render(SignUpComponent);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('has password type for password input', async()=>{
    await render(SignUpComponent)
    const input = screen.getByLabelText('Password')
    expect(input).toHaveAttribute('type','password');
  })

  it('has password repeat input', async () => {
    await render(SignUpComponent);
    expect(screen.getByLabelText('Password Repeat')).toBeInTheDocument();
  });

  it('has password type for password repeat input', async()=>{
    await render(SignUpComponent)
    const input = screen.getByLabelText('Password Repeat')
    expect(input).toHaveAttribute('type','password');
  })
});
