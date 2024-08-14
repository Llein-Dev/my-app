import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

export default function Home() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
