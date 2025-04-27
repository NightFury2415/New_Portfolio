const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-700 py-8 text-center text-muted-foreground text-sm">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
          Dev Modi
        </span>
        . Built with ❤️ using Next.js and Tailwind CSS.
      </p>
      <p className="mt-2 animate-pulse text-xs">
        Innovation ✨ Creativity 💻 Passion 🚀
      </p>
    </footer>
  );
};

export default Footer;
