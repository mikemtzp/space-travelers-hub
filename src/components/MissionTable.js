const MissionTable = () => (
  <>
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="mission">
          <td className="mission-name">Iridium Next</td>
          <td className="mission-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id facilisis lacus,
            eu euismod lacus. Donec viverra elementum feugiat. In posuere felis quam, id tempus
            magna viverra in. Quisque luctus lectus nisl, a lacinia diam porttitor ut. Aliquam
            volutpat nisl non nulla mollis, at molestie erat ornare. Fusce in lacinia eros,
            id iaculis ante. In convallis in ipsum sed feugiat. Morbi quis velit ipsum. Phasellus
            lacinia, magna non accumsan malesuada, quam nisi venenatis velit,
            pulvinar sollicitudin
            felis nisl malesuada lorem. Praesent augue leo, rutrum nec mi id,
            lacinia tincidunt erat. Curabitur tincidunt elit semper, fermentum ligula id,
            porta nibh.

          </td>
          <td>NOT A MEMBER</td>
          <td><button type="button">Join Mission</button></td>
        </tr>
      </tbody>
    </table>
  </>
);

export default MissionTable;
