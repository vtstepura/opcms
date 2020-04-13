import React from 'react';
import { inRange } from 'lodash';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Paginator extends React.PureComponent {

  static defaultProps = {
    currentPage: 1,
    onChange:    () => {},
    totalPages:  0
  }

  handleChangePage = (page) => (event) => {
    event.preventDefault();

    if (page > 0 && page <= this.props.totalPages) {
      this.props.onChange(page);
    }
  }

  renderItems = () => {
    const { totalPages, currentPage } = this.props;

    return Array.from({ length: totalPages }, (_, index) => {
      if (inRange(index + 1, currentPage - 5, currentPage + 5)) {
        return (
          <PaginationItem
              active={currentPage === index + 1}
              key={index}
              onClick={this.handleChangePage(index + 1)}>
            <PaginationLink href="#">
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        );
      } else {
        return null
      }
    });
  }

  render() {
    const { currentPage, totalPages } = this.props;

    if (totalPages > 1) {
      return (
        <Pagination
            className='pagination-container'
            size='md'>

          <PaginationItem
              disabled={currentPage === 1}
              onClick={this.handleChangePage(1)}>
            <PaginationLink
                first
                href="" />
          </PaginationItem>

          <PaginationItem
              disabled={currentPage === 1}
              onClick={this.handleChangePage(currentPage - 1)}>
            <PaginationLink
                href=""
                previous />
          </PaginationItem>

          {this.renderItems()}

          <PaginationItem
              disabled={currentPage === totalPages}
              onClick={this.handleChangePage(currentPage + 1)}>
            <PaginationLink
                href=""
                next />
          </PaginationItem>

          <PaginationItem
              disabled={currentPage === totalPages}
              onClick={this.handleChangePage(totalPages)}>
            <PaginationLink
                href=""
                last />
          </PaginationItem>

        </Pagination>
      );
    } else {
      return null;
    }
  }
}

export default Paginator
