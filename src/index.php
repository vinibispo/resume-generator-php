<?php
  include "./header.php";
?>
  <div class="container mt-4">
    <h1>Gerador de Currículo</h1>
    <form onsubmit="generatePdf(event)">
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input type="text" id="name" name="name" class="form-control" required>
      </div>

      <div class="mb-3">
        <label for="born_date" class="form-label">Data de Nascimento:</label>
        <input type="date" id="born_date" name="born_date" class="form-control" required>
      </div>

      <div id="experiences" class="mb-3">
        <h2>Experiências Profissionais</h2>
      </div>
      <button type="button" onclick="addExperience()" class="btn btn-primary">+</button>

      <div id="references" class="mb-3">
        <h2>Referências Pessoais</h2>
      </div>
      <button type="button" onclick="addReference()" class="btn btn-primary">+</button>

      <input type="submit" value="Salvar" class="btn btn-success">
    </form>
  </div>

  <script src="./assets/script.js">
  </script>

  <script>
    $(() => {
      addExperience()
      addReference()
    })
  </script>
<?php
  include "footer.php";
?>
