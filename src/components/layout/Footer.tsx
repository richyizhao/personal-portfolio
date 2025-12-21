const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 self-end">
      <p>Copyright &copy; {currentYear}. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
