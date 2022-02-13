import NavigationBar from './NavigationBar';
import AppRouter from './AppRouter';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AppRouter>
      <NavigationBar />
    </AppRouter>
  );
};

export default App;
