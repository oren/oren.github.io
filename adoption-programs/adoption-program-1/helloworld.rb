# encoding: UTF-8
  require 'forwardable'
    class Ctnr
      extend Forwardable
      attr_accessor :dict, :length, :it
      def initialize()
        @dict = {}
        @length = 0
        @it = -1
      end
      def push(*args)
        args.each do |arg|
          @dict[@length.to_s] = arg
          @length += 1
        end
      end
      def [](i)
        @dict[i.to_s]
      end
      def []=(i,x)
        @dict[i.to_s] = x
      end
      def slice(i)
        result = Ctnr.new;
        i.times {|index| result.push(self[index])}
        return result
      end
      def concat(other)
        other.length.times {|i| push(other[i]) }
        self
      end
      def values
        @dict.values
      end
      def to_s
        "[#{@dict.values.join(", ")}]"
      end
      def_delegators :values, :each
    end
    module Math
      def self.random(*args)
        rand(*args)
      end
      def self.floor(number)
        number.floor
      end
    end
  #####
  甲=3
甲.times do |_rand1|
	_ans1="問天地好在。"
	p([_ans1].join)
end 
