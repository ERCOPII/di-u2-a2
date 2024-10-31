import { getImageUrl } from './utils.js';
import Profile from './ProfileNew.js';

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile name="Maria Skłodowska-Curie" codeImg="szV5sdG" profesion="física y química" numeroPremios="4" premios="Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci" descubrimientos="polonio (elemento químico)"/>
      <Profile name="Katsuko Saruhashi" codeImg="YfeOqp2" profesion="geoquímica" numeroPremios="2" premios="Premio Miyake de geoquímica, Premio Tanaka" descubrimientos="un método para medir el dióxido de carbono en el agua de mar"/>
    </div>
  );
}