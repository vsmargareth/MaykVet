import Container from './style'
import PawIcon from './assets/icone-pata'
import MaykIcon from '.assets/logo'
export function Header() {
  return (
    <Container>
      <img class="lplogo" src={MaykIcon} alt="MaykVet linha formando um cachorro e um gato" />
      <nav class="navbar navbar-expand-lg navbar-dark ms-auto  ">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <div class="lpnavbar">
                <img src={PawIcon} alt="desenho de uma pata" />
                <a class="nav-link " aria-current="page" href="#">Serviços</a>
              </div>
              <div class="lpnavbar">
                <img src={PawIcon} alt="desenho de uma pata" />
                <a class="nav-link" href="#">Sobre mim</a>
              </div>
              <div class="lpnavbar">
                <img src={PawIcon} alt="desenho de uma pata" />
                <a class="nav-link" href="#">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>

  )
}