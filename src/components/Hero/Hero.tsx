import icon from '../../assets/svg/google-icon.svg';

const Hero: React.FC = () => {
  return (
    <section className="flex justify-between items-center mt-14">
      <div className="flex items-center rounded-t-lg pl-2 w-40 h-[3.250rem] bg-gray-900">
        <img src={icon} alt="google" className="w-8 mr-4 ml-2"/>
        <h1 className="text-2xl font-semibold font-Quicksand text-sky-600">BOOKS</h1>
      </div>
    </section>
  );
};

export { Hero };
