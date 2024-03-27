function Footer() {
  return (
    <div className='bottom-2 text-very-dark-grayish-blue dark:text-light-grayish-blue tracking-wide transition delay-500 ease-in-out text-center animate-flip-down animate-once animate-duration-1000'>
      Challenge by{' '}
      <a
        aria-labelledby='Link to Frontend Mentor Challenge'
        href='https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW'
        target='_blank'
        rel='noopener'
        className='hover:text-primary'
      >
        Frontend Mentor
      </a>
      .<br className='md:hidden' /> Coded by{' '}
      <a
        aria-labelledby='Link to Tomas Emanuel Ramirez Abarca LinkedIn'
        target='_blank'
        rel='noopener'
        href='https://www.linkedin.com/in/emanuelramirezabarca

'
        className='hover:text-primary'
      >
        Tomas Emanuel Ramirez Abarca
      </a>
      .
    </div>
  );
}

export default Footer;
