import { ContentLayout } from '../../components/sidebar/components/content-layout'
import { FoldersScreen } from '../../views/folders-screen/folders-screen.view'

const FoldersPage = () => {
  return (
    <ContentLayout breadcrumbs={[{ label: 'Folders' }]}>
      <FoldersScreen />
    </ContentLayout>
  )
}

export default FoldersPage
