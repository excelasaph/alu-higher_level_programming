# Import the MyList class
>>> MyList = __import__('1-my_list').MyList
>>> my_list = MyList()
>>> bool = isinstance(my_list, MyList)


>>> bool = issubclass(MyList, list)


>>> my_list1 = MyList()
>>> my_list1.append(1)
>>> my_list1.append(2)
>>> my_list1.append(3)
>>> value = str(my_list1)

>>> my_list2 = MyList()
>>> my_list2.append(1)
>>> my_list2.append(2)
>>> my_list2.append(3)


>>> my_list3 = MyList()
>>> my_list3.append(1)
>>> my_list3.append(2)
>>> my_list3.append(3)
>>> value = my_list3.print_sorted(False)

>>> my_list4 = MyList()
>>> my_list4.append(3)
>>> my_list4.append(2)
>>> my_list4.append(1)
>>> value = my_list4.print_sorted(False)

>>> my_list5 = MyList()
>>> my_list5.append(5)
>>> my_list5.append(-3)
>>> my_list5.append(1)
>>> my_list5.append(-2)
>>> value = my_list5.print_sorted(False)

>>> my_list6 = MyList()
>>> value = my_list6.print_sorted(False)

>>> my_list7 = MyList()
>>> my_list7.append(3)
>>> my_list7.append(1)
>>> my_list7.append(2)
>>> my_list7.append(4)
>>> value = my_list7.print_sorted(False)
