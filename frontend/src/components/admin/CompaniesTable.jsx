
import { Avatar, AvatarImage } from '../ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import React from 'react'
import {Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>  A list of your recent registered companies </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
  <TableRow>
    <TableCell>
      <Avatar>
  <AvatarImage src="https://www.designrush.com/uploads/users/customer-2/image_1505932843_7ac5b2f025d1c1e59547dfcef328e1d3.png" />
</Avatar>
    </TableCell>

    <TableCell>Company Name</TableCell>
    <TableCell>26-04-2026</TableCell>

    <TableCell className="text-right">
      <Popover>
        <PopoverTrigger asChild>
          <MoreHorizontal className="cursor-pointer" />
        </PopoverTrigger>

        <PopoverContent className="w-32">
          <div className="flex items-center gap-2 w-fit cursor-pointer hover:bg-gray-100 p-2 rounded">
            <Edit2 className="w-4" />
            <span>Edit</span>
          </div>
        </PopoverContent>
      </Popover>
    </TableCell>
  </TableRow>
</TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable
