import S from '@sanity/desk-tool/structure-builder';
import {
  IoIosBasket,
  IoIosList,
  IoIosMegaphone,
  IoIosNavigate,
  IoIosPaper,
  IoIosPersonAdd,
  IoIosRestaurant,
  IoIosSettings,
  IoIosConstruct,
} from 'react-icons/io';

export default () =>
  S.list()
    .title('Content')
    .items([
      // Make a new list item
      S.listItem()
        // Give it a title
        .title('Blog')
        .icon(IoIosMegaphone)
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Blog')
            .items([
              // Add the first list item
              S.listItem()
                .title('Blog Post')
                // This automatically gives it properties from the project type
                .schemaType('post')
                // When you open this list item, list out the documents
                // of the type “project"
                .child(S.documentTypeList('post').title('Blog Post')),
              // Add a second list item
              S.listItem()
                .title('Blog Category')
                .schemaType('category')
                // When you open this list item, list out the documents
                // of the type category"
                .child(S.documentTypeList('category').title('Blog Category')),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'metaData',
            'post',
            'category',
            'author',
            'navigation',
            'page',
            'job',
            'mealServiceLocation',
            'menu',
            'serviceLocation',
            'service',
          ].includes(listItem.getId())
      ),
    ]);
