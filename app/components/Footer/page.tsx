const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p className="text-sm">
            © {currentYear} <span className="font-semibold text-gray-800">Mateus Silva</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
