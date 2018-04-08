import React, { Component } from 'react';

import 'scenes/about/styles/style.css';
import ViewOnGitHubButton from 'commons/components/buttons/ViewOnGitHubButton';

export default class ProjectSummary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div class="project-summary">
        <h1 className="theme__section-header">Summary</h1>
        <p>Lorem ipsum dolor sit amet, ea causae vivendum usu, democritum theophrastus ad sit. Ut mucius scriptorem has, justo cotidieque deterruisset ea qui. Persius fierent theophrastus ad usu, sed mnesarchum efficiendi te. Agam ludus placerat id ius, vidisse inimicus intellegat et vim. Ut per primis vivendo intellegam.Populo tritani definiebas mei no, cu cum prima explicari conclusionemque, qui et ridens accusam gloriatur. Cu sea error oblique percipitur, te has iisque petentium. Lorem possim vidisse nec in, sea eu legimus molestiae. Dicat saepe decore cu sit, mea an alienum qualisque, qualisque deterruisset has at. Ad per appetere gubergren, an qui postea graecis eligendi. Per dolores suscipit torquatos te, vis ne meliore adipisci oportere. Sea ex ipsum mnesarchum, omnis interesset ne vix.Mea et malorum repudiandae. Eum no nobis oporteat instructior. Vim ea admodum instructior, alienum consequuntur ne quo, in sint efficiendi nec. Ne duo volutpat imperdiet, populo apeirian nec ut. Ut habeo oblique mnesarchum has, at omnes consequat ius. In eos iusto tritani officiis, nec no tota aeque posidonium, simul choro commune no has. Ut elitr accusam nec, te mel fastidii erroribus. Decore suscipit ad pri, equidem adipiscing nec et, quis populo eu mel. Aperiri elaboraret te nam, sit sadipscing deterruisset ne.</p>
        <ViewOnGitHubButton url="https://github.com/wenhaohaoo/CS3201"/>
      </div>
    );
  }
}
