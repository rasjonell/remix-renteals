import type { SerializeFrom } from '@remix-run/node';
import { Link } from '@remix-run/react';

type TableProps = { bikes: SerializeFrom<Array<Models.BikeWithRelationships>> };

export default function BikeTable({ bikes }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Model</th>
            <th>Color</th>
            <th>Rating</th>
            <th>Availability</th>
            <th>Reservations</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((bike, index) => (
            <tr key={bike.id}>
              <th>{index + 1}</th>
              <td>{bike.model}</td>
              <td>{bike.color}</td>
              <td>{bike.rating}</td>
              <td>{bike.available ? 'Available' : 'Not Available'}</td>
              <td>{bike.reservations.length}</td>
              <td>{new Date(bike.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`${bike.id}/edit`} className="btn btn-sm btn-warning mr-2">
                  Edit
                </Link>
                <button className="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
