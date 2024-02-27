import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between p-5 mx-5 border-b-2 item-center'>
            <h1 className="text-4xl font-bold"> React Knowladge Cafe! </h1>
            <img src={profile} alt="" />
            
        </header>
    );
};

export default Header;