import css from './style.module.css';

const SuccessRegister = () => {
    return (
        <div className="flex flex-col items-center">
            <div className='my-3'>
                <h1 className="font-bold">welcome to lepas aja, your account was successfully activated</h1>
            </div>
            <div className='my-3'>
                <h1 className={`font-bold ${css.textPink}`}>redirect to login page</h1>
            </div>
        </div>
    );
}
 
export default SuccessRegister;