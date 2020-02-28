Title: Elixir note
Date: 2020-02-28
Tags: programming
Authors: Do Anh Tu



### Module

- Bắt đầu bằng chữ in hoa và dạng CamelCase

- Chứa các function, các function **phải** viết trong một module.

- Có thể viết dạng `Module.Part.One`. Chỉ là syntactic sugar.

```elixir
defmodule Bot.Chat do
  def hello do
    IO.puts "Hi there"
  end
end

Bot.Chat.hello()
```

### Function

- Phải viết trong một module

- Giá trị return là dòng cuối, không giống như Python phải `return something`

- Tên function viết thường, vi_du_nhu_the_nay

- `?` trả về *true* hoặc *false*, `!` ám chỉ function có thể raise runtime error

- `def` và `defmodule` là các *macro*, ko phải keyword

```elixir
defmodule MyTool.Math do
  def sum(a, b) do
    a + b
  end
  
  def multiply(a, b), do: a * b
  
  def sub(a, b \\ 0) do
    a - b
  end
end
```

- Dùng `|>` (pipeline), kết quả trả về được đưa vào args đầu tiên của function đằng sau

```elixir
prev() |> next(arg1, arg2) == next(prev(), arg1, arg2)
```

- **Arity** là số args của một function. Rất quan trọng vì trong một module có thể def nhiều function tên giống nhau nhưng khác về args nhận vào.

```elixir
defmodule Foo do
  def add(a) do
    a
  end
  
  def add(a, b) do
    a + b
  end
end

# Ở đây ta có 2 func: Foo.add/1 & Foo.add/2 
```

- `defp` để tạo private function

- Xem thêm import và alias ở https://elixir-lang.org/getting-started/alias-require-and-import.html

- Các func trong `Elixir.Kernel` tự động được import vì phải dùng nhiều

- Nên có type cho các function để có thể dùng **dialyzer** phân tích về sau.

```elixir
@spec func_name(number, number, list) :: float
```

```elixir
# Anonymous function call with dot
sum = fn x, y -> x + y end
sum.(1, 2)
```



### Atom

- Các atom được giữ trong một *atom table*, có giá trị là chính nó và có lợi về mặt performance.

```elixir
AtomOne == :"Elixir.AtomOne" # Tự được thêm Elixir vào trước

alias IO, as: MyIO

MyIO == :"Elixir.IO"
MyIO == Elixir.IO
```

### Data types

```elixir
#### Tuple
me = {"James", 2020}
name = elem(me, 0) # get item by index
new_me = put_elem(me, 1, 2021)  # Update item at index

#### List
numbs = [1, 1, 2, 3, 5]
Enum.at(numbs, 2) == 2  # Get item by index
7 in numbs  # Check item in list
hd(numbs) == 1  # Get head
tl(numbs) == [1, 2, 3, 5]  # Get tail
new_numbs = [7 | numbs]  # Cheaper to add head than tail

#### Map
langs = %{python: 1991, elixir: 2011}
Map.get(langs, 4, :not_found)  # Get with default value
{:ok, python_born} = Map.fetch(langs, :python)
Map.fetch!(langs, :golang)  # Raise error
langs.python  # If key is an atom

#### String
# Strings are binaries
~s("Ahihi " tai sao the)  # Sigil
~S(Not escaped \n)

'ABC'  # Character list
[65, 66, 67] == 'ABC'
~c(Character list sigil)
~C(Unescaped sigil #{3 + 0.14})
# Character lists aren’t compatible with binary strings.
# To convert a character list to a binary string, you can use List.to_string/1.

```

### Format

- Dùng `mix format` để tự format code cho đẹp.
- Có thể tìm plugin cho editor đang dùng để tự format khi save.